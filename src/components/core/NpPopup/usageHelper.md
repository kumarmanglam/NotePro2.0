```javascript   
      <NpPopup
        marginLeft={0}
        ComponentTrigger={<Icon name={'Trash'} size={'medium'} />}
      >
        {['hello', 'buddy', 'bro'].map((text) => (
          <Button
            label={text}
            onClick={() => {
              console.log(text);
            }}
          />
        ))}
      </NpPopup>
```