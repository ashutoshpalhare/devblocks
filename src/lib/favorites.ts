import { useCallback, useEffect, useState } from "react";
import type { FavoriteType } from "./types";

const KEY = "devblocks:favorites";

export type FavoriteKey = `${FavoriteType}:${string}`;

function read(): FavoriteKey[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FavoriteKey[]) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteKey[]>([]);

  useEffect(() => {
    setFavorites(read());
    const sync = () => setFavorites(read());
    window.addEventListener("devblocks:favorites", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("devblocks:favorites", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((type: FavoriteType, id: string) => {
    const key: FavoriteKey = `${type}:${id}`;
    const next = read().includes(key) ? read().filter((k) => k !== key) : [...read(), key];
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("devblocks:favorites"));
  }, []);

  const has = useCallback(
    (type: FavoriteType, id: string) => favorites.includes(`${type}:${id}`),
    [favorites],
  );

  return { favorites, toggle, has };
}
