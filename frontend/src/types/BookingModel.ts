export interface BookingModel {
  businessId: string;
  date: string;
  time: string;
  userEmail: string;
  userName: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
}
