import { isDirectives } from '@accuser/mdast-util-directive-type-guards';
import { describe, expect, it } from 'vitest';

describe('isDirectives', () => {
	it('returns `true` for a blockquote node', () => {
		expect(isDirectives({ type: 'leafDirective', name: 'leaf', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'blockquote',
		42,
		[],
		{},
		{ type: 'leafDirective' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false` for an non-string value', () => {
			expect(isDirectives(value)).toBe(false);
		});
	}
});
