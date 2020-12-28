/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// @ts-nocheck TODO(TS) provide types

import { ValueOf } from '../typeUtils';
import { Gestures } from '../RNGestureHandlerModule.web';

const gestures: Record<number, any> = {};

export function getHandler(tag: number) {
  if (tag in gestures) return gestures[tag];

  throw new Error('No handler for tag ' + tag);
}

export function createGestureHandler(
  handlerTag: number,
  handler: InstanceType<ValueOf<typeof Gestures>>
) {
  if (handlerTag in gestures) {
    throw new Error('Handler with tag ' + handlerTag + ' already exists');
  }
  gestures[handlerTag] = handler;
  gestures[handlerTag].handlerTag = handlerTag;
}

export function dropGestureHandler(handlerTag: number) {
  getHandler(handlerTag).destroy();
  // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  delete gestures[handlerTag];
}

export function getNodes() {
  return { ...gestures };
}