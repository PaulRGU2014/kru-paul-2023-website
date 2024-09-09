import React from "react";
import ScrollSync from "@/utils/ScrollSync/ScrollSync";

export default function HomeScroll() {
  return (
    <ScrollSync>
      <section style={{ backgroundColor: 'red' }}>
        Section 1
      </section>
      <section style={{ backgroundColor: 'blue' }}>
        Section 2
      </section>
      <section style={{ backgroundColor: 'green' }}>
        Section 3
      </section>
    </ScrollSync>
  );
}