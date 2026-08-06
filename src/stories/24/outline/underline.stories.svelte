<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UnderlineSvelte from '../../../lib/24/outline/underline.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UnderlineSvelte,
		args: { class: '' },
	})
</script>

<Story name="Underline" />
