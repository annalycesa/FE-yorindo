import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

const Event = () => {
    return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* 1. Pasang Sidebar-nya */}
        <AppSidebar />
        
        {/* 2. Area Konten Utama */}
        <main className="flex-1 p-6 bg-background">
          <div className="flex items-center gap-4 mb-6">
            {/* Tombol untuk buka/tutup sidebar (penting untuk mobile!) */}
            <SidebarTrigger className="text-primary" />
            <h1 className="text-3xl font-headline text-primary">Event List</h1>
          </div>

          <div className="grid gap-4">
            {/* Contoh konten event kamu */}
            <div className="p-4 border border-outline rounded-lg bg-surface-container">
              <h2 className="text-xl font-bold">Workshop Tradisional Cake</h2>
              <p className="text-on-surface-variant">26 Maret 2026 - Jakarta</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )

}

export default Event;