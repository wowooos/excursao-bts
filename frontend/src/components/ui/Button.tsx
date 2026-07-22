import { ButtonHTMLAttributes } from 'react';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{
        width: '100%',
        height: 44,
        borderRadius: 8,
        border: 'none',
        background: '#2C2C2A',
        color: '#fff',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        ...props.style,
      }}
    />
  );
}
