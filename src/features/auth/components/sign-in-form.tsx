import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Schema
import { signInFormSchema } from "../validation";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { Loader2Icon } from "lucide-react";

interface SignInFormProps {
  isSubmitting: boolean;
}

export const SignInForm = ({ isSubmitting }: SignInFormProps) => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = (values: z.infer<typeof signInFormSchema>) => {
    console.log(values);
  };

  const formIsSubmitting = isSubmitting || form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <div className="flex flex-col space-y-2 pb-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-muted-foreground">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={formIsSubmitting}
                    placeholder="Email address"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-muted-foreground">
                  Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    disabled={formIsSubmitting}
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="mx-auto my-2 w-28"
          type="submit"
          disabled={formIsSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2Icon className="size-4 animate-spin text-white" />
          ) : (
            "Continue"
          )}
        </Button>
      </form>
    </Form>
  );
};
