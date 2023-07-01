import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCounter } from 'hooks';
import StoreProvider from 'store/Provider';

describe('useCounter', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: StoreProvider,
    });

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
});
