import { Category } from './category';

export interface Article {
    code?: number;
    titre: string;
    contenu: string;
    user?: {
        code: number,
        username: string
    };
    date_modification?: Date;
    category?: Category;
}
