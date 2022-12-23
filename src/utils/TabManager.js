class TabManager {
  constructor(rootElement, componentMapping, defaultTabId) {
    this.rootElement = rootElement;
    this.componentMapping = componentMapping;
    this.defaultTabId = defaultTabId;
  }

  async openTabById(id) {
    if (id in this.componentMapping) {
      const {
        component,
        params: [...props],
        button: button,
      } = this.componentMapping[id];
      const Component = await component(...props);
      this.rootElement.innerHTML = "";
      this.rootElement.innerHTML = "";
      this.rootElement.appendChild(Component, button);
    } else {
      console.error("Invalid id provided");
    }
  }
}

export default TabManager;
