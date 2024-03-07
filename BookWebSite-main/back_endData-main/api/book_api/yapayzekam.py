# from openai import OpenAI
# import os
# api_key = "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"
# client = OpenAI(api_key=api_key)

# while True :
#     model_engine = "text-davinci-003"

#     prompt= input("fikrimi almak ister misin? ")
    
#     if'exit' in prompt or 'quit' in prompt:
#         break 

# res = client.chat.completions.create(
   
  
    
#         model=model_engine,
#         prompt=prompt,
#         max_tokens=1024,
#         n=1,
#         stop=None,
        

# )
# print(res.choices[0].text)
# import openai

# openai.api_key = "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"

# while True:
#     model_name = "text-davinci-003"

#     prompt = input("fikrimi almak ister misin? ")

#     if 'exit' in prompt or 'quit' in prompt:
#         break

#     response = openai.completions.create(
#         model=model_name,
#         prompt=prompt,
#         max_tokens=1024,
#         n=1,
#         stop=None,
#     )
#     print(response.choices[0].text)



# from openai import OpenAI
# import os
# # client = OpenAI(
   
# #   api_key=os.environ['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']  # this is also the default, it can be omitted
# # )

# api_key = "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"  # API anahtarınızı buraya ekleyin
# client = OpenAI(api_key=api_key)


# while True:
#     model_name = "text-davinci-003"

#     prompt = input("fikrimi almak ister misin? ")

#     if 'exit' in prompt or 'quit' in prompt:
#         break

#     # response = client.completions.create()(
#     #     model=model_name,
#     #     prompt=prompt,
#     #     max_tokens=1024,
#     #     n=1,
#     #     stop=None,
#     # )
#     # print(response.choices[0].text)
#     response = client.completions.create(
#          model=model_name,
#             prompt=prompt,
#              max_tokens=1024,
#              n=1,
#              stop=None,
#       )
#     print(response.choices[0].text)
from openai import OpenAI
import os

api_key = "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"
client = OpenAI(api_key=api_key)

while True:
    model_engine = "text-davinci-003"

    prompt = input("fikrimi almak ister misin? ")

    if 'exit' in prompt or 'quit' in prompt:
        break 

    res = client.chat.completions.create(
        model=model_engine,
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        max_tokens=1024,
        n=1,
        stop=None,
    )

    print(res.choices[0].message['content'])

