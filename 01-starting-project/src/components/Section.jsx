export default function Section({children,items,ContentWrpper="main",...props}){
    return (
      <section {...props}>
          <ContentWrpper>
            {items}
        </ContentWrpper>
        {children}
      </section>
    )
}