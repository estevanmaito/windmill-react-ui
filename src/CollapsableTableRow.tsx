import React, { forwardRef } from "react";
import { Disclosure, Transition } from "@headlessui/react";

import Icon from "@linvoice/icon";
import { TableCell } from "@windmill/react-ui";

export interface CollapsableTableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  row: React.ReactElement | Array<React.ReactElement>;
}

const CollapsableTableRow = forwardRef<
  HTMLTableRowElement,
  CollapsableTableRowProps
>(function CollapsableTableRow(
  { className, children, row, ...other }: CollapsableTableRowProps,
  ref
) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            as="tr"
            className={`py-2 relative cursor-pointer ${className}`}
            ref={ref}
            {...other}
          >
            <TableCell>
              <Icon
                name="dropdown"
                className={`transition-all ${
                  open ? "transform rotate-180" : ""
                } w-6 h-6`}
              />
            </TableCell>
            {row}
          </Disclosure.Button>
          <Transition
            as={React.Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform translate-y-2 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform translate-y-2 opacity-100"
            leaveTo="transform translate-y-0 opacity-0"
          >
            <Disclosure.Panel as="tr" className="w-full text-gray-200">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
});

export default CollapsableTableRow;
