import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div style={{ background: '#fff', border: '0.5px solid #D3D1C7', borderRadius: 8, padding: 12 }}>
      {children}
    </div>
  );
}
