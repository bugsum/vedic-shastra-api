import { Schema, model, Document } from 'mongoose';

export interface IScripture extends Document {
    title: string;
    content: string;
    category: 'Veda' | 'Upanishad' | 'Puran' | 'Bhagavad Gita';
    verse?: string;
    dateAdded: Date;
}

const scriptureSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: {
        type: String,
        enum: ['Veda', 'Upanishad', 'Puran', 'Bhagavad Gita'],
        required: true
    },
    verse: { type: String },
    dateAdded: { type: Date, default: Date.now }
});

const Scripture = model<IScripture>('Scripture', scriptureSchema);

export default Scripture;
