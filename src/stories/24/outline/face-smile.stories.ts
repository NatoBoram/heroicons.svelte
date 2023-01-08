import type { Meta, StoryObj } from '@storybook/svelte'
import { FaceSmile as FaceSmileSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: FaceSmileSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FaceSmileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceSmile: Story = {}
