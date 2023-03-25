import { Text } from "../TextComponent/Text";

export const FAQ = () => {
  return (
    <div className="max-w-[90vw] m-auto flex flex-col gap-12">
      <h2 className="font-sans text-2xl font-semibold text-white">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-3 gap-8 h-max">
        <div className="bg-secondary rounded-3xl p-8 h-full max-w-xl">
          <Text
            title="What is agile estimation?"
            text="Agile estimation is the process of estimating how long a task or project will take in an agile or scrum environment. It's important for planning, prioritization, and resource allocation."
          />
        </div>
        <div className="bg-secondary rounded-3xl p-8 h-full max-w-xl">
          <Text
            title="Is Luna free to use?"
            text="Yes, Luna is currently free to use. We may introduce premium features in the future, but the core functionality will always be free."
          />
        </div>
        <div className="bg-secondary rounded-3xl p-8 h-full max-w-xl">
          <Text
            title="Can I use Luna for non-agile projects?"
            text="Absolutely! Luna can be used for any project where you need to estimate and prioritize tasks."
          />
        </div>
      </div>
    </div>
  );
};
