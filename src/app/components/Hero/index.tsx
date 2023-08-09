"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import Button from "components/Button";
import CurrencyInput from "components/Inputs/CurrencyInput";
import DatePicker from "components/Inputs/DatePicker";
import Input from "components/Inputs/Input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const tripSearchSchema = z.object({
  text: z.string().refine((location) => location !== "", "Campo obrigatório"),
  startDate: z.date().nullable(),
  budget: z.string(),
});

type TripSearchSchema = z.infer<typeof tripSearchSchema>;

const Hero = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TripSearchSchema>({
    resolver: zodResolver(tripSearchSchema),
    defaultValues: {
      text: "",
      startDate: null,
      budget: "",
    },
  });

  const submitSearchForm = (data: TripSearchSchema) => {
    router.push(
      `/trips/search?text=${data.text}${
        data.startDate ? `&startDate=${data.startDate}` : ""
      }${data.budget ? `&budget=${data.budget}` : ""}`
    );
  };

  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat p-5 pb-0 lg:py-28">
      <h1 className="text-xl font-semibold mb-4 text-center lg:text-[40px] lg:mb-12">
        Encontre sua próxima{" "}
        <span className="text-purple-primary">viagem!</span>
      </h1>

      <form
        onSubmit={handleSubmit(submitSearchForm)}
        className="flex flex-col gap-4 lg:flex-row lg:bg-purple-light max-w-[938px] lg:mx-auto lg:p-4 lg:rounded-lg"
      >
        <Input
          placeholder="Onde você quer ir?"
          {...register("text")}
          error={!!errors.text}
          errorMessage={errors.text?.message}
        />

        <div className="flex gap-4">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                onChange={field.onChange}
                placeholderText="Data de ida"
                selected={field.value}
                minDate={new Date()}
                locale={"pt-BR"}
                error={!!errors.startDate}
                errorMessage={errors.startDate?.message}
              />
            )}
          />

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                placeholder="Orçamento"
                allowDecimals={false}
                onValueChange={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                error={!!errors.budget}
                errorMessage={errors.budget?.message}
              />
            )}
          />
        </div>

        <Button type="submit" className="lg:min-w-[210px] lg:max-h-[38px]">
          Pesquisar
        </Button>
      </form>
    </section>
  );
};

export default Hero;
