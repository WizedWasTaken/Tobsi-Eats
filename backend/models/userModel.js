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
    profilePicture: {
      type: String,
      default: 'default.jpg',
    },
    role: {
      type: String,
      enum: ['user', 'slave', 'admin'],
      default: 'user',
    },
    // For every DKK spent, the user gets 0.1 loyalty point
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    // DATA
    // TODO: Bliver det her data brugt???
    amountOfOrders: {
      type: Number,
      default: 0,
    },
    credit: {
      type: Number,
      default: 0,
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
    favoriteShop: {
      type: String,
      default: null,
    },
    lastLoggedIn: {
      type: Date,
      default: null,
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
    // Ikke send password til frontend
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    if (this.PasswordCheck(this.password)) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    throw new Error('Password is not available for hashing!');
  }
  next();
});

UserSchema.methods.PasswordCheck = async function (password) {
  if (password.length < 6) {
    throw new Error('Password is too short!');
  }

  if (password.length > 50) {
    throw new Error('Password is too long!');
  }

  if (password === 'password') {
    throw new Error('Password is too common!');
  }

  if (password.includes(this.username)) {
    throw new Error('Password includes username!');
  }

  return true;
};

UserSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
