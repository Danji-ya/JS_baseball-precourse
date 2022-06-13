const $ = (selector: string, scope = document) => scope.querySelector(selector);

export { $ };
