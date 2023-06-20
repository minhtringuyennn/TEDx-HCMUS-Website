import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useScrollPosition } from 'hooks';
import { MOCK_PAGE_Y_OFFSET } from 'constants/test';

describe('useScrollPosition', () => {
  it('should track scroll position, or fallback to initial value in case window is missing', () => {
    const { result } = renderHook(() => useScrollPosition(MOCK_PAGE_Y_OFFSET));
    expect(result.current).toBe(MOCK_PAGE_Y_OFFSET);
  });
});
