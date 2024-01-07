import type { Meta, StoryObj } from '@storybook/svelte'
import FaceSmileSvelte from '../../../lib/16/solid/face-smile.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FaceSmileSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FaceSmileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceSmile: Story = {}
