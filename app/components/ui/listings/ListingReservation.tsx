"use client";
import { FC } from "react";
import { Range } from "react-date-range";

// Components
import Calendar from "@/ui/forms/Calendar";
import Button from "@/ui/Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="overflow-hidden rounded border-[1px] border-neutral-200 bg-white">
      <div className="flex flex-row items-center gap-1 p-4">
        <h4 className="text-2xl font-semibold ">£ {price}</h4>
        <h5 className="font-light text-neutral-600">/night</h5>
        <hr />
      </div>
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="flex flex-row items-center justify-between p-4">
        <h5 className="text-lg font-semibold">Total Price:</h5>
        <h5 className="text-lg font-semibold">£ {totalPrice} </h5>
      </div>
    </div>
  );
};

export default ListingReservation;
