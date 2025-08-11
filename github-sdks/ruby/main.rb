require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])


# 🌱 Create the new branch
client.create_ref(
  "Bin0id/Github-Tutorial",
  "heads/sdks",
  "af6e351075e5e8671aa0bf17e1dfab02f7b5df0b"
)