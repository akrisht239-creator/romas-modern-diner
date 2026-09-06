import { useState, type FormEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const TIME_SLOTS = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
];

function labelForSlot(slot: string) {
  const [h, m] = slot.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${String(m).padStart(2, "0")} ${suffix}`;
}

const inputCls =
  "w-full border-b border-input bg-transparent px-0 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-brass";

export default function ReservationForm() {
  const createEnquiry = useMutation(api.enquiries.createEnquiry);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setErrorMsg(null);
    try {
      await createEnquiry({
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        guests,
        preferredDate: String(data.get("date") ?? ""),
        preferredTime: String(data.get("time") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setStatus("success");
      form.reset();
      setGuests(2);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="card-quiet flex flex-col items-center px-8 py-12 text-center"
        role="status"
      >
        <span className="grid size-14 place-items-center rounded-full bg-brass/10">
          <CheckCircle2 className="size-7 text-brass" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
          Enquiry sent
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you — the Roma&rsquo;s team will call you on the number
          provided to confirm your table.
        </p>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
          This is an enquiry, not an automatic confirmation
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 rounded-full border-ink/20 px-6 text-[13px] font-semibold text-ink hover:bg-ink hover:text-ivory"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-quiet px-6 py-7 md:px-9 md:py-9" noValidate={false}>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
        <div>
          <label htmlFor="rf-name" className="eyebrow text-muted-foreground">
            Name
          </label>
          <input
            id="rf-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            placeholder="Your full name"
            className={cn(inputCls, "mt-1.5")}
          />
        </div>

        <div>
          <label htmlFor="rf-phone" className="eyebrow text-muted-foreground">
            Phone
          </label>
          <input
            id="rf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="Your phone number"
            className={cn(inputCls, "mt-1.5")}
          />
        </div>

        <div>
          <label htmlFor="rf-guests" className="eyebrow text-muted-foreground">
            Number of Guests
          </label>
          <div className="mt-1.5 flex items-center justify-between border-b border-input transition-colors focus-within:border-brass">
            <span className="py-2.5 text-[15px] text-foreground" id="rf-guests-value">
              {guests} {guests === 1 ? "guest" : "guests"}
            </span>
            <span className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Fewer guests"
                className="grid size-8 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-brass hover:text-brass disabled:opacity-40"
                disabled={guests <= 1}
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
              >
                −
              </button>
              <input id="rf-guests" name="guests" type="hidden" value={guests} />
              <button
                type="button"
                aria-label="More guests"
                className="grid size-8 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-brass hover:text-brass disabled:opacity-40"
                disabled={guests >= 40}
                onClick={() => setGuests((g) => Math.min(40, g + 1))}
              >
                +
              </button>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="rf-date" className="eyebrow text-muted-foreground">
            Preferred Date
          </label>
          <input
            id="rf-date"
            name="date"
            type="date"
            required
            min={today}
            className={cn(inputCls, "mt-1.5")}
          />
        </div>

        <div>
          <label htmlFor="rf-time" className="eyebrow text-muted-foreground">
            Preferred Time
          </label>
          <select
            id="rf-time"
            name="time"
            required
            defaultValue="19:00"
            className={cn(inputCls, "mt-1.5")}
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {labelForSlot(slot)}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="rf-message" className="eyebrow text-muted-foreground">
            Message <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="rf-message"
            name="message"
            rows={3}
            placeholder="Anything we should know — occasion, seating preference…"
            className={cn(inputCls, "mt-1.5 resize-none")}
          />
        </div>
      </div>

      {status === "error" && errorMsg && (
        <p role="alert" className="mt-5 text-sm text-destructive">
          {errorMsg}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          Send your details and the team will confirm by phone. Subject to
          availability.
        </p>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 rounded-full bg-ink px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-brass"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <Send className="ml-2 size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
