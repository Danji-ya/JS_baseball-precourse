type EventTargetType = Element | Document | Window | null;

const $ = (selector: string, scope = document) => scope.querySelector(selector);
function addEventListener(
  eventTarget: EventTargetType,
  type: string,
  listener: (event: Event) => void,
) {
  if (eventTarget == null) return;

  eventTarget.addEventListener(type, listener);
}

export { $, addEventListener };
