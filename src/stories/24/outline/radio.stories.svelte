<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RadioSvelte from '../../../lib/24/outline/radio.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: RadioSvelte,
		args: { class: '' },
	})
</script>

<Story name="Radio" />
