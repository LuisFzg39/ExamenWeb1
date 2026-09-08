export declare class ScreeningEntity {
    id: number;
    movieTitle: string;
    startsAt: Date;
    status: 'scheduled' | 'cancelled';
    screening: ScreeningEntity;
}
