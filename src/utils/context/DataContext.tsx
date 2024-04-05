import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchAllData } from "@/utils/fetcher/data";

type PlaylistItem = {
  id: number;
  dir_id: number;
  title: string;
  description: string;
  url: string;
  type: "image" | "video";
  created_at: string;
  updated_at: string;
};

export type ResponseData = {
  id: number;
  title: string;
  description: string;
  banner: string;
  logo: string;
  created_at: string;
  updated_at: string;
  playlist: PlaylistItem[];
};

interface DataContextType {
  data: ResponseData;
  loading: boolean;
}

const initialDataContext: DataContextType = {
  data: [{ data: [] }],
  loading: true,
};

const DataContext = createContext<DataContextType>(initialDataContext);

export const useDataContext = () => useContext(DataContext);

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [data, setData] = useState<ResponseData>(initialDataContext.data);
  const [loading, setLoading] = useState<boolean>(initialDataContext.loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchAllData();
        setData(fetchedData[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      setData(initialDataContext.data);
      setLoading(initialDataContext.loading);
    };
  }, []);

  return <DataContext.Provider value={{ data, loading }}>{children}</DataContext.Provider>;
}
