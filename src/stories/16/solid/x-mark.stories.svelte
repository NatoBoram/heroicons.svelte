<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XMarkSvelte from '../../../lib/16/solid/x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: XMarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="XMark" />
