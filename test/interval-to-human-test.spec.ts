import test from 'ava';
import intervalToHuman from '../src';

test('supports seconds', t => {
  t.is(intervalToHuman(1_000), '1 second');
});

test('supports minutes', t => {
  t.is(intervalToHuman(65_000), '1 minute');
});

test('supports hours', t => {
  t.is(intervalToHuman(60_000 * 72), '1 hour');
});

test('supports days', t => {
  t.is(intervalToHuman(60_000 * 60 * 24), '1 day');
});

test('supports weeks', t => {
  t.is(intervalToHuman(60_000 * 60 * 24 * 8), '1 week');
});

test('supports months', t => {
  t.is(intervalToHuman(60_000 * 60 * 24 * 7 * 4.3), '1 month');
});

test('supports manual unit specification', t => {
  t.is(intervalToHuman(60_000, 'second'), '60 seconds');
});

test('supports plural manual unit specification', t => {
  t.is(intervalToHuman(60_000, 'seconds'), '60 seconds');
});

test('pluralizes', t => {
  t.is(intervalToHuman(2_000), '2 seconds');
});
