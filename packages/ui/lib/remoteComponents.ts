type RemoteComponentType = {
  name: string;
  components: ComponentProp[];
};

type ComponentProp = {
  componentName: string;
  moduleName: string;
};

export const remoteComponents: RemoteComponentType = {
  name: "Remote Components",
  components: [
    {
      componentName: "Navigation",
      moduleName: "ui/components/Navigation/Navigation",
    },
    { componentName: "Logo", moduleName: "ui/components/Logo/Logo" },
    { componentName: "Footer", moduleName: "ui/components/Footer/Footer" },
  ],
};
