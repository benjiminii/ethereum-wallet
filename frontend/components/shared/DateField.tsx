export default function DateField({ label, id, setFieldValue }: any) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label text-white">
        <span className="label-text text-white">{label}</span>
      </label>
      <input
        type="date"
        className="input-bordered input w-full max-w-xs text-main2"
        onChange={(e) => setFieldValue(id, e.target.value)}
      />
    </div>
  );
}
