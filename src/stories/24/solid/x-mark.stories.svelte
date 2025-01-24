<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XMarkSvelte from '../../../lib/24/solid/x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: XMarkSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="XMark" />
