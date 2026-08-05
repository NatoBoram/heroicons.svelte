<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneSvelte from '../../../lib/24/outline/phone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PhoneSvelte,
		args: { class: '' },
	})
</script>

<Story name="Phone" />
