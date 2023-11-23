import React from 'react'


    import {Button, Modal, Frame, AppProvider, Page} from '@shopify/polaris';
    import {useState, useCallback} from 'react';
    
    function ModalDelete() {
      const [active, setActive] = useState(true);
    
      const toggleModal = useCallback(() => setActive((active) => !active), []);
    
      const activator = <Button onClick={toggleModal}>Open</Button>;
    
      return (
        <AppProvider>
            <Page title='Test Modale'>
        <Frame>
          <div style={{height: '500px'}}>
            <Modal
              activator={activator}
              //open={active}
              onClose={toggleModal}
              title="Discard all unsaved changes"
              primaryAction={{
                destructive: true,
                content: 'Discard changes',
                onAction: toggleModal,
              }}
              secondaryActions={[
                {
                  content: 'Continue editing',
                  onAction: toggleModal,
                },
              ]}
            >
              <Modal.Section>
                If you discard changes, you’ll delete any edits you made since you
                last saved.
              </Modal.Section>
            </Modal>
          </div>
        </Frame>
        </Page>
        </AppProvider>
      );
    }


export default ModalDelete