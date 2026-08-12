type Resource = {
  name: string;
  detail: string;
  link?: string;
  linkLabel?: string;
};

type ResourceSection = {
  heading: string;
  description?: string;
  resources: Resource[];
};

type Props = {
  sections: ResourceSection[];
};

export default function ResourceBlock({ sections }: Props) {
  return (
    <>
      {sections.map((section) => (
        <div className="resourceBlock" key={section.heading}>
          <h2>{section.heading}</h2>

          {section.description && <p>{section.description}</p>}

          <ul className="resourceList">
            {section.resources.map((r) => (
              <li className="resourceItem" key={r.name}>
                <div>
                  <strong>{r.name}</strong>
                  {r.detail && <span> — {r.detail}</span>}
                </div>

                {r.link && (
                  <a href={r.link} target="_blank" rel="noopener noreferrer">
                    {r.linkLabel ?? "Visit →"}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
