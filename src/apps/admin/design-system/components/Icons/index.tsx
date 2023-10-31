import { current } from "@mongez/react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleCheck,
  IconEdit,
  IconEye,
  IconFilter,
  IconPlus,
  IconTrash,
  TablerIconsProps,
} from "@tabler/icons-react";

export { IconChevronLeft, IconChevronRight };

export const ChevronLeft = IconChevronLeft;
export const ChevronRight = IconChevronRight;
export const TrashIcon = IconTrash;
export const EditIcon = IconEdit;
export const CloseFileIcon = EditIcon;
export const PlusIcon = IconPlus;
export const CheckCircleFillIcon = IconCircleCheck;
export const FilterIcon = IconFilter;
export const EyeIcon = IconEye;

export const ChevronIcon = (props: TablerIconsProps) =>
  current("direction") === "ltr" ? (
    <IconChevronRight {...props} />
  ) : (
    <IconChevronLeft {...props} />
  );
