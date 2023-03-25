type TextProps = {
  title: string;
  text: string;
  width?: string;
  align?: string;
};

export const Text = (props: TextProps) => {
  const { title, text, width, align } = props;
  return (
    <div className={`${width} ${align} flex flex-col gap-8`}>
      <h2 className="font-sans text-2xl font-semibold text-white">{title}</h2>
      <p className="max-w-3xl font-body text-xl text-white">{text}</p>
    </div>
  );
};
