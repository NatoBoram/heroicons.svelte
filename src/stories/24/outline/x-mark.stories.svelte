<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XMarkSvelte from '../../../lib/24/outline/x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: XMarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="XMark" />
