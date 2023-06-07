import ICONS from '../../../assets/icons/index';

export const ICON_MAP = {
  Trash: () => ICONS.Trash,
  Logo: () => ICONS.Logo,
  Menu: () => ICONS.Menu,
  Bulb: () => ICONS.Bulb,
  Archive: () => ICONS.Archive,
  Palette: () => ICONS.Palette,
  DeleteForever: () => ICONS.DeleteForever,
  Restore: () => ICONS.Restore,
  Unarchive: () => ICONS.Unarchive,
};

export const applyMapper = (name) => {
  const SelectedIcon = ICON_MAP[name];
  return SelectedIcon ? SelectedIcon() : null;
};
