<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneSvelte from '../../../lib/24/solid/phone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PhoneSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Phone" />
