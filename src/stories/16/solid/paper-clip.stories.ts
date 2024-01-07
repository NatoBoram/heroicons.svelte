import type { Meta, StoryObj } from '@storybook/svelte'
import PaperClipSvelte from '../../../lib/16/solid/paper-clip.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PaperClipSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PaperClipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperClip: Story = {}
