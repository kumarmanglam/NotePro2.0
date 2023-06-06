export const PAGE_TYPE = {
  NOTES: 'notes',
  ARCHIVE: 'archive',
  TRASH: 'trash',
};

export const SUBMIT_KEYS = {
  BG_COLOR: 'backgroundColor',
};

export const COMPONENT_TYPE = {
  BUTTON: 'button',
  POPUP: 'popup',
};
export const ACTION_BUTTON = {
  [PAGE_TYPE.NOTES]: [
    {
      type: COMPONENT_TYPE.POPUP,
      popupChildType: 'backgroundColor',
      label: 'Background Color',
      icon: 'Palette',
      children: [
        {
          color: '#ffa8a8',
          label: 'Red',
          submitKey: 'BgColor--ffa8a8',
        },
        {
          color: '#faa2c1',
          label: 'Pink',
          submitKey: 'BgColor--faa2c1',
        },
        {
          color: '#dee2e6',
          label: 'Grey',
          submitKey: 'BgColor--dee2e6',
        },
        {
          color: '#e599f7',
          label: 'Grape',
          submitKey: 'BgColor--e599f7',
        },
        {
          color: '#b197fc',
          label: 'Violet',
          submitKey: 'BgColor--b197fc',
        },
        {
          color: '#91a7ff',
          label: 'Indigo',
          submitKey: 'BgColor--91a7ff',
        },
        {
          color: '#74c0fc',
          label: 'Blue',
          submitKey: 'BgColor--74c0fc',
        },
        {
          color: '#66d9e8',
          label: 'Cyan',
          submitKey: 'BgColor--66d9e8',
        },
        {
          color: '#63e6be',
          label: 'Teal',
          submitKey: 'BgColor--63e6be',
        },
        {
          color: '#8ce99a',
          label: 'Green',
          submitKey: 'BgColor--8ce99a',
        },
        {
          color: '#ffc078',
          label: 'Orange',
          submitKey: 'BgColor--ffc078',
        },
        {
          color: '#ffe066',
          label: 'Yellow',
          submitKey: 'BgColor--ffe066',
        },
        {
          color: '#c0eb75',
          label: 'Lime',
          submitKey: 'BgColor--c0eb75',
        },
        {
          color: '#ffffff',
          label: 'White',
          submitKey: 'BgColor--ffffff',
        },
      ],
    },
    {
      type: COMPONENT_TYPE.BUTTON,
      label: 'Trash',
      icon: 'Trash',
      submitKey: 'trash',
    },
    {
      type: COMPONENT_TYPE.BUTTON,
      label: 'Archive',
      icon: 'Archive',
      submitKey: 'archive',
    },
  ],
  [PAGE_TYPE.TRASH]: [
    {
      type: COMPONENT_TYPE.BUTTON,
      label: 'DeleteForever',
      icon: 'DeleteForever',
      submitKey: 'deleteForever',
    },
  ]
};
