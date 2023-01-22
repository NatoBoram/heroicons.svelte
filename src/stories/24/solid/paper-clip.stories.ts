import type { Meta, StoryObj } from '@storybook/svelte'
import PaperClipSvelte from '../../../lib/24/solid/paper-clip.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PaperClipSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PaperClipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperClip: Story = {}
