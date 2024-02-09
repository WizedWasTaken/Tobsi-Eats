import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Angiv et brugernavn'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Angiv et password'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Angiv et telefonnummer'],
    },

    role: {
      type: String,
      enum: ['user', 'slave', 'admin'],
      default: 'user',
    },
    // DATA
    // TODO: Bliver det brugt???
    amountOfOrders: {
      type: Number,
      default: 0,
    },
    credit: {
      type: Number,
      def,
    },
    totalAmountPaid: {
      type: Number,
      default: 0,
    },
    deliveryFee: {
      type: Number,
      // 5%
      default: 5,
    },
    latestOrder: {
      type: Date,
      default: null,
    },
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },
  {
    timestamps: true,
    // Ikke send password tilbage til frontend
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
