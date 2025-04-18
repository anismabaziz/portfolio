export default function Footer() {
  const currentYear = new Date().getFullYear();
  const importantLinks = [
    { title: "Home" },
    { title: "My Projects" },
    { title: "About" },
  ];
  const socialLinks = [
    { title: "Github" },
    { title: "Linkedin" },
    { title: "Kaggle" },
    { title: "X" },
  ];

  return (
    <footer className="border-t md:w-2/3 mx-auto">
      <p className="text-[var(--text)] py-6">
        Copyright &copy; {currentYear} Baziz Anis.
      </p>
      <div className="flex items-start justify-between">
        <div className="text-[var(--text)] space-y-3">
          <h4 className="font-bold">Important Links</h4>
          <div className="flex flex-col gap-3">
            {importantLinks.map((link) => {
              return <a className="cursor-pointer">{link.title}</a>;
            })}
          </div>
        </div>
        <div className="text-[var(--text)] space-y-3">
          <h4 className="font-bold">Social</h4>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => {
              return <a className="cursor-pointer">{link.title}</a>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
