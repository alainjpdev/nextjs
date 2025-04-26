export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Database = {
  public: {
    Tables: {
      listings: {
        Row: {
          id: string;
          title: string;
          address: string;
          price: number;
          description: string | null;
          type: string;
          bedrooms: number | null;
          bathrooms: number | null;
          square_feet: number | null;
          year_built: number | null;
          features: Json | null;
          status: string | null;
          lat: number | null;
          lng: number | null;
          images: Json | null;
          created_at: string;
          updated_at: string;
          user_id: string | null;
        };
      };
    };
  };
};
