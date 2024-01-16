import dayjs from "dayjs";

export default function DateField({ label, name, setFieldValue, value }: any) {
  const formattedValue = dayjs(value).format("YYYY-MM-DD");

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label text-white">
        <span className="label-text text-white">{label}</span>
      </label>
      <input
        type="date"
        className="input-bordered input w-full max-w-xs text-main2"
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={formattedValue}
      />
    </div>
  );
}
