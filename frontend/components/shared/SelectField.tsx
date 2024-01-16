export default function SelectField({
  label,
  name,
  setFieldValue,
  options,
  value,
}: any) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-white">{label}</span>
      </label>
      <select
        className="select-bordered select text-main2"
        onChange={(e) => setFieldValue(name, e.target.value)}
        defaultValue={"Pick one"}
      >
        {options.map((option: string) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
