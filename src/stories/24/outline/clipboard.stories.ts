import type { Meta, StoryObj } from '@storybook/svelte'
import { Clipboard as ClipboardSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ClipboardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clipboard: Story = {}
